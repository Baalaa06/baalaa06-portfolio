import "./ArticleScrollStack.scss"
import React from 'react'
import Article from "/src/components/articles/base/Article.jsx"
import ScrollStack, { ScrollStackItem } from "/src/components/generic/ScrollStack.jsx"
import AvatarView from "/src/components/generic/AvatarView.jsx"

/**
 * @param {ArticleDataWrapper} dataWrapper
 * @param {Number} id
 * @return {JSX.Element}
 * @constructor
 */
function ArticleScrollStack({ dataWrapper, id }) {
    return (
        <Article id={dataWrapper.uniqueId}
                 type={Article.Types.SPACING_DEFAULT}
                 dataWrapper={dataWrapper}
                 className={`article-scroll-stack`}>
            <ArticleScrollStackItems dataWrapper={dataWrapper}/>
        </Article>
    )
}

/**
 * @param {ArticleDataWrapper} dataWrapper
 * @return {JSX.Element}
 * @constructor
 */
function ArticleScrollStackItems({ dataWrapper }) {
    const filteredItems = dataWrapper.getOrderedItemsFilteredBy(null)

    return (
        <ScrollStack className="skills-scroll-stack" itemDistance={50} itemScale={0.02}>
            {filteredItems.map((itemWrapper, key) => (
                <ScrollStackItem key={key} itemClassName="skill-card">
                    <ArticleScrollStackItem itemWrapper={itemWrapper}/>
                </ScrollStackItem>
            ))}
        </ScrollStack>
    )
}

/**
 * @param {ArticleItemDataWrapper} itemWrapper
 * @return {JSX.Element}
 * @constructor
 */
function ArticleScrollStackItem({ itemWrapper }) {
    return (
        <div className="skill-card-content">
            <div className="skill-header">
                <AvatarView itemWrapper={itemWrapper} 
                           size="lg"
                           className="skill-avatar"/>
                <div className="skill-info">
                    <h3 className="skill-title" 
                        dangerouslySetInnerHTML={{__html: itemWrapper.locales.title}}/>
                    <p className="skill-description"
                       dangerouslySetInnerHTML={{__html: itemWrapper.locales.text}}/>
                </div>
            </div>
            {itemWrapper.percentage > 0 && (
                <div className="skill-progress">
                    <div className="progress-bar">
                        <div className="progress-fill" 
                             style={{width: `${itemWrapper.percentage}%`}}/>
                    </div>
                    <span className="progress-text">{itemWrapper.percentage}%</span>
                </div>
            )}
        </div>
    )
}

export default ArticleScrollStack