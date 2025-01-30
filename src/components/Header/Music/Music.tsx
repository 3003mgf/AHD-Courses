'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap, Power2, Power3, TweenMax } from 'gsap';

const Music = () => {
  
  let time = 0;


  useEffect(() => {
    const c: HTMLCanvasElement | null = document.querySelector("#CANVAS_M");

    if (c) {
      let opt = {
        width: c.offsetWidth,
        height: c.offsetHeight,
        midY: c.offsetHeight / 2,
        points: 80,
        stretch: 10,
        sinHeight: 0,
        speed: -0.1,
        strokeColor: document.body.classList.contains("dark")
          ? "#E9E6DF99"
          : "#E9E6DE99",
        strokeWidth: 1.5,
        power: false,
      };

      c.width = opt.width * 2;
      c.height = opt.height * 2;
      c.style.width = `${opt.width}px`;
      c.style.height = `${opt.height}px`;

      const ctx = c.getContext("2d");
      ctx!.scale(2, 2);
      ctx!.lineWidth = opt.strokeWidth;
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";

      let time = 0;

      const updateStrokeColor = () => {
        opt.strokeColor = document.body.classList.contains("dark")
          ? "#E9E6DF99"
          : "#E9E6DE99";
        ctx!.strokeStyle = opt.strokeColor;
      };

      const render = () => {
        window.requestAnimationFrame(render);
        ctx!.clearRect(0, 0, opt.width, opt.height);
        time += 1;
        ctx!.beginPath();

        let increment = 0;

        for (let i = 0; i <= opt.points; i++) {
          increment += i < opt.points / 2 ? 0.1 : -0.1;

          const x = (opt.width / opt.points) * i;
          const y =
            opt.midY +
            Math.sin(time * opt.speed + i / opt.stretch) *
              opt.sinHeight *
              increment;
          ctx!.lineTo(x, y);
        }

        ctx!.stroke();
      };

      render();

      c.addEventListener("click", () => {
        opt.power = !opt.power;

        if (opt.power) {
          TweenMax.to(opt, 1, {
            sinHeight: 4,
            stretch: 5,
            ease: Power2.easeInOut,
          });
        } else {
          TweenMax.to(opt, 1, {
            sinHeight: 0,
            stretch: 10,
            ease: Power3.easeOut,
          });
        }
        console.log(opt.power);
      });

      // Monitor changes to the dark mode
      const observer = new MutationObserver(updateStrokeColor);
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // Initial update
      updateStrokeColor();

      // Cleanup observer on unmount
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] cursor-pointer"
    >
      <div className='w-full h-full myFlex scale-[0.65]'>
        <canvas id="CANVAS_M" className="w-[36px] h-[36px] rounded-full" />
      </div>
    </div>
  );
};

export default Music;