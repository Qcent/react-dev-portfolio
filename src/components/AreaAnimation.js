module.exports = {
    duration: 500,
    defaultStyle: {
        transition: `all ${500}ms ease`,
    },
    transitionStyles: {
        title:
        {
            entering: {
                marginLeft: '100vw',
                transform: 'rotate3d(2, -1, -1, -0.2turn)'
            },
            entered: {},
            exiting: { opacity: 0.6 },
            exited: { opacity: 0 },
        },
        content: {
            entering: {
                opacity: 0,
                marginRight: '100vw',
                transform: 'rotate(180deg)'
            },
            entered: {},
            exiting: { opacity: 0.6 },
            exited: { opacity: 0 },
        }
    }
}