import "./SinglePageLayout.scss"
import React from 'react'
import SectionContent from "/src/components/sections/SectionContent.jsx"
import NavigationScrollbar from "./NavigationScrollbar.jsx"
import {useParser} from "/src/hooks/parser.js"
import {useLanguage} from "/src/providers/LanguageProvider.jsx"

function SinglePageLayout({ sections }) {
    const parser = useParser()
    const language = useLanguage()

    return (
        <div className="single-page-layout">
            <NavigationScrollbar sections={sections} />
            <div className="single-page-content">
                {sections.map((section, index) => {
                    const sectionTitle = parser.parseSectionTitle(section)
                    
                    return (
                        <section key={section.id} className="single-page-section" id={`section-${section.id}`}>
                            <div className="single-page-section-content">
                                <SectionContent section={section} />
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default SinglePageLayout