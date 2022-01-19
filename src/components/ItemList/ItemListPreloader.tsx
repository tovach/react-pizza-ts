import React, {FC} from 'react';
import ContentLoader from "react-content-loader";
import styles from './ItemList.module.scss'

interface ItemListPreloaderProps {
    quantity: number;
}

const ItemListPreloader: FC<ItemListPreloaderProps> = ({quantity }) => {
    const mockup = (key: number) => (
        <ContentLoader
            key={key}
            speed={1}
            width={300}
            height={605}
            viewBox="0 0 300 605"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="4" y="351" rx="3" ry="3" width="280" height="6"/>
            <circle cx="144" cy="146" r="137"/>
            <rect x="5" y="377" rx="3" ry="3" width="280" height="90"/>
            <rect x="3" y="301" rx="3" ry="3" width="280" height="6"/>
            <rect x="4" y="326" rx="3" ry="3" width="280" height="6"/>
            <rect x="132" y="493" rx="30" ry="30" width="155" height="41"/>
            <rect x="6" y="500" rx="3" ry="3" width="80" height="6"/>
            <rect x="6" y="513" rx="3" ry="3" width="80" height="6"/>
            <rect x="6" y="526" rx="3" ry="3" width="80" height="6"/>
        </ContentLoader>
    )
    return (
        <ul className={styles.list}>
            {Array(quantity)
                .fill(0)
                .map((el, id) => mockup(id))
            }
        </ul>
    );
};

export default ItemListPreloader;