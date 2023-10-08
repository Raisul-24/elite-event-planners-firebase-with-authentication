
import PropTypes from 'prop-types';
const SingleImage = ({single}) => {
   const {img,img2,img3,img4} = single;
   return (
      <div>
         <div className=" pb-10">
            <img src= {img} alt="" className="w-96 h-64 shadow-xl rounded-xl mb-3" />
            <img src={img2} alt="" className="w-96 h-64 shadow-xl rounded-xl mb-3" />
            <img src={img3} alt="" className="w-96 h-64 shadow-xl rounded-xl mb-3" />
            <img src={img4} alt="" className="w-96 h-64 shadow-xl rounded-xl mb-3" />
         </div>
      </div>
   );
};
SingleImage.propTypes ={
   single: PropTypes.element.any
}
export default SingleImage;