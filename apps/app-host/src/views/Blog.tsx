import mount from 'app_blog/mount'
export default () => {
    let ref;
    return <div ref={ref}>
        {ref && mount(ref)}
    </div>
}
