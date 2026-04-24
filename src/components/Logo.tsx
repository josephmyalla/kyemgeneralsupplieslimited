interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  dark?:boolean
}
import {Kyemlogo} from "../assets"
const Logo: React.FC<LogoProps> = ({size}) => {
  
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {
       <img src={Kyemlogo} alt="Kyem General Supplies Limited" className="w-40 h-20" sizes={size}/>
      }
    </div>
  );
};

export default Logo;