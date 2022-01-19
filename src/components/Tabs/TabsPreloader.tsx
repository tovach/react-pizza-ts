import React, {FC} from 'react';
import ContentLoader from "react-content-loader";

interface TabsPreloaderProps {
    quantity: number;
}

const TabsPreloader:FC<TabsPreloaderProps> = ({ quantity }) => {
    const mockup = (key:number) => (
        <ContentLoader
            key={key}
            speed={1}
            width={130}
            height={41}
            viewBox="0 0 130 40"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="3" rx="30" ry="30" width="130" height="37"/>
        </ContentLoader>
    )
    return (
        <>
            {Array(quantity)
                .fill(0)
                .map((el,id) => mockup(id))
            }
        </>
    );
};

export default TabsPreloader;