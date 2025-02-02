'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  id: string;
  text: string;
  custom?: string;
  animated?: {
    duration?: number,
    stagger?: number,
    threshold?: number
  },
  type?: number
};

const AnimatedText = ({text, id, custom, animated, type} : Props) => {

  if(type === 1){
    return <TypeOne meta={{text, id, custom, animated}}/>
  };

  if(type === 2){
    return <TypeTwo meta={{text, id, custom, animated}}/>
  };

  if(type === 3){
    return <TypeThree meta={{text, id, custom, animated}}/>
  };

  if(type === 4){
    return <TypeFour meta={{text, id, custom, animated}}/>
  };
}
 
export default AnimatedText;


// Curved
const TypeOne = ({meta}:{meta: Props}) =>{

  const {text, id, custom, animated} = meta;
  
  const { ref: textRef, inView } = useInView({
    threshold: animated?.threshold || 0.8,
    triggerOnce: true
  });

  useEffect(() => {
    if(inView){
      gsap.to(`#${id}`, {
        opacity: 1,
        top: 0,
        rotate: 0,
        duration: animated?.duration || 0.6,
        stagger: animated?.stagger || 0.05
      })
    }
  }, [animated, inView]);

  return (
    <p 
      ref={textRef} 
      className={`${custom} relative overflow-hidden`}
    >
      <span className="opacity-0">{text}</span>
      <span 
        id={id}
        className="absolute top-[100%] left-0 w-full h-full opacity-0 rotate-[5deg]"
      >
        {text}
      </span>
    </p>
  );
};

// Splitted Text
const TypeTwo = ({meta}:{meta: Props}) => {

  const { text, id, custom, animated } = meta;

  const { ref: textRef, inView } = useInView({
    threshold: animated?.threshold || 0.8,
    triggerOnce: true
  });

  const createSpan = () => {
    return text.split("").map((character: string, index: number)=>{
      return(
        <span
          key={`${id}_SPAN_CONTAINER_${index}`}
          className="relative"
        >
          <span className="opacity-0">{character}</span>

          <span id={`${id}`} className={`absolute top-[30%] left-0 w-full h-full opacity-0`}>
            {character === "#" ? "\u00A0" : character}
          </span>
        </span>
      )
    })  
  };

  useEffect(() => {
    if(inView){
      gsap.to(`#${id}`, {
        opacity: 1,
        top: 0,
        duration: animated?.duration || 0.6,
        stagger: animated?.stagger || 0.05
      })
    }
  }, [animated, inView]);

  return (
    <p 
      ref={textRef} 
      className={`${custom} relative overflow-hidden`}
    >
      <span className="flex">
        {createSpan()}
      </span>
    </p>
  );
};

// Non Splitted Text
const TypeThree = ({meta}:{meta: Props}) =>{

  const { text, id, custom, animated } = meta;

  const { ref: textRef, inView } = useInView({
    threshold: animated?.threshold || 0.8,
    triggerOnce: true
  });


  useEffect(() => {
    if(inView){
      gsap.to(`#${id}`, {
        opacity: 1,
        top: 0,
        duration: animated?.duration || 0.6
      })
    }
  }, [animated, inView]);

  return (
    <p 
      ref={textRef} 
      className={`${custom} relative overflow-hidden`}
    >
      <span>{text}</span>
      <span id={id} className="absolute top-[100%] left-0 w-full h-full opacity-0">{text}</span>
    </p>
  );
};

// Just Opacity
const TypeFour = ({meta}:{meta: Props}) =>{

  const { text, id, custom, animated } = meta;

  const { ref: textRef, inView } = useInView({
    threshold: animated?.threshold || 0.8,
    triggerOnce: true
  });

  useEffect(() => {
    if(inView){
      gsap.to(`#${id}`, {
        opacity: 1,
        duration: animated?.duration || 0.6
      })
    }
  }, [animated, inView]);

  return (
    <p 
      ref={textRef} 
      id={id}
      className={`${custom} relative overflow-hidden opacity-0`}
    >
      {text}
    </p>
  );
};