const Embed = () => {
  return ( 
    <div className="w-[375px] fixed bottom-3 right-3 z-50">
      <iframe 
        style={{borderRadius: "12px"}} 
        src="https://open.spotify.com/embed/playlist/3KpUO5eaq63Omsyxz1bqMN?utm_source=generator" width="100%" height="425" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
      >

      </iframe>
    </div>
   );
}
 
export default Embed;