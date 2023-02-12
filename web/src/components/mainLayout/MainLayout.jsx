import { memo } from "react";
import FieldContainer from "../field/FieldContainer";

import './mainLayout.sass';

const MainLayout = (props) => {
    return (
        <form className="mainLayout">
            <FieldContainer {...props} />
            <FieldContainer {...props} />
        </form>
    )
}

export default memo(MainLayout);