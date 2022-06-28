import mount from 'app_landing/mount'
export default () => {
    let ref;
    return <div ref={ref}>
        {ref && mount(ref)}
    </div>
}
