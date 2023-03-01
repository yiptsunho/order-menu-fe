import React, { useCallback, useRef } from 'react'
import { toPng, toJpeg } from 'html-to-image'
import Pdf from 'react-to-pdf';
import { POPULAR_PHOTO } from '../utils/Constants';

const Export = (props) => {
    const { printRef } = props
    const ref = useRef(printRef);

    const getFileName = (fileType) => `file.${fileType}`

    const downloadPng = useCallback(() => {
        if (ref.current === null) {
            return
        }
        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${getFileName('png')}`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref]);

    const downloadJpg = useCallback(() => {
        if (ref.current === null) {
            return
        }
        toJpeg(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${getFileName('jpg')}`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref]);

    return (
        <>
            <button type="button" onClick={downloadPng}>Save png</button>
            <button type="button" onClick={downloadJpg}>Save jpeg</button>
            {/* <Pdf targetRef={ref} filename={`${getFileName('pdf')}`} x={10} y={10} scale={0.4}>
                {({ toPdf }) => (
                    <button type="button" onClick={toPdf}>Generate pdf</button>
                )}
            </Pdf> */}
            {/* <img src={POPULAR_PHOTO} alt="testing" ref={ref} /> */}
        </>
    )
}
export default Export;