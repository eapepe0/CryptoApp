import "../styles/Spinner.css";

export const Spinner = () => {
  return (
    <div style={{display : "flex" , justifyContent : 'center' , marginTop : '48px'}}>
        <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        </div>
    </div>
  );
};
