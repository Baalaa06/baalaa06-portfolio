import React from 'react'
import Layout from "/src/components/layout/Layout.jsx"
import LayoutImageCache from "/src/components/layout/LayoutImageCache.jsx"
import SinglePageLayout from "/src/components/layout/SinglePageLayout.jsx"
import {useData} from "/src/providers/DataProvider.jsx"
import {useLanguage} from "/src/providers/LanguageProvider.jsx"

function Portfolio() {
    const data = useData()
    const language = useLanguage()

    if(!data || !language) {
        window.location.reload()
        return
    }

    const profile = data.getProfile()
    const settings = data.getSettings()
    const sections = data.getSections()

    const backgroundStyle = settings.templateSettings.backgroundStyle

    return (
        <Layout id={"react-portfolio"}
                backgroundStyle={backgroundStyle}>
            <LayoutImageCache profile={profile}
                              settings={settings}
                              sections={sections}/>

            <SinglePageLayout sections={sections}/>
        </Layout>
    )
}

export default Portfolio