import React from 'react';

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-full">
            {children}
        </div>
    )
}
export default DashboardLayout;