import "./NavigationScrollbar.scss"
import React, { useState, useEffect } from 'react'
import { useParser } from "/src/hooks/parser.js"
import { useLanguage } from "/src/providers/LanguageProvider.jsx"

function NavigationScrollbar({ sections }) {
    const parser = useParser()
    const language = useLanguage()
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section => 
                document.getElementById(`section-${section.id}`)
            ).filter(Boolean)

            const currentSection = sectionElements.find(element => {
                const rect = element.getBoundingClientRect()
                return rect.top <= 100 && rect.bottom > 100
            })

            if (currentSection) {
                setActiveSection(currentSection.id.replace('section-', ''))
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(`section-${sectionId}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="navigation-scrollbar">
            <ul className="nav-list">
                {sections.map((section) => {
                    const sectionTitle = parser.parseSectionTitle(section)
                    const isActive = activeSection === section.id
                    
                    return (
                        <li key={section.id} className={`nav-item ${isActive ? 'active' : ''}`}>
                            <button 
                                onClick={() => scrollToSection(section.id)}
                                className="nav-link"
                                dangerouslySetInnerHTML={{
                                    __html: language.parseJsonText(sectionTitle.title)
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationScrollbar