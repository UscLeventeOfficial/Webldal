const RememberMe = ({text, type}) => {
    return(
       <div className="flex gap-2 mb-3 ml-1">
        <input type={type} className="checkbox w-5 h-auto checkbox-primary" />
        <span className="font-bold label-text ">{text}</span>
        </div>
    )
  };
  
  export default RememberMe;