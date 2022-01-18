import React from "react"
import ContentLoader from "react-content-loader"

const TabsPreloader = () => (
    <ContentLoader
        speed={1}
        width={130}
        height={41}
        viewBox="0 0 130 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="3" rx="30" ry="30" width="130" height="37" />
    </ContentLoader>
)

export default TabsPreloader