const LazyImage = ({src, alt, itemProp, className }) => {
    return <img loading="lazy" {...{src, alt, itemProp, className }} />
}

export default LazyImage
