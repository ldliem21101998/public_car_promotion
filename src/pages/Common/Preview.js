import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom"
import { getDownPaymentService } from "../../services/mail.services";
import * as docxPreview from "docx-preview";

const Preview = () => {
    const location = useLocation();
    const docxContainer = useRef(null);

    useEffect(() => {
        getDownPaymentService(location.pathname.split("/")[2])
            .then(res => {
                docxPreview.renderAsync(res.data, docxContainer.current, null, { className: "docx-content" });
            })
            .catch(error => {
                console.error("Error rendering DOCX:", error);
            });
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div ref={docxContainer} className="w-[60%]"></div>
        </div>
    );
}

export default Preview