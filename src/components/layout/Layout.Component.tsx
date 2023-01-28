import React from 'react';
import NavigationComponent from '../Navigation/Navigation.component';
type Props = {
    children: React.ReactNode
} 
function LayoutComponent({children}: Props) {
    return (
        <div>
            <NavigationComponent/>
            {children}
        </div>
    );
}

export default LayoutComponent;