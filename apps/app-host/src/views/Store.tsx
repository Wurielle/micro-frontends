import mount from 'app_store/mount'
export default () => {
    let ref;
    return <div ref={ref}>
        {ref && mount(ref)}
    </div>
}
