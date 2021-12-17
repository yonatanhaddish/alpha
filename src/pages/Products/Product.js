// import react from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Product = () => {
    return (
        <>
           <InfoSection {...homeObjTwo}/>
           <InfoSection {...homeObjThree}/>
           <Pricing />
           <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Product;
