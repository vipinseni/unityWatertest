export const deviceType = () => {
    const screenWidth = window.innerWidth;
    const media = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    };
    
    if(screenWidth < media.md) {
        return 'mobile';
    } else if (screenWidth >= media.md && screenWidth < media.lg ) {
        return 'tablet';
    } else {
        return 'desktop';
    }
};