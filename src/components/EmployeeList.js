import React from 'react'

const EmployeeList = () => {
    return (
        <>
            <div className='container mx-auto my-8'>
                <div className="h-12">
                    <button className='rounded bg-slate-600 text-white px-6 py-6'>
                        Add Employee
                    </button>
                </div>
                <div className="flex shadow border-b">
                    <table className='min-w-full'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                    First Name
                                </th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                    Last Name
                                </th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                    Email
                                </th>
                                <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                    Actions 
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shabbir</td>
                                <td>Dawin</td>
                                <td>Shabbir@gmail.com</td>
                                <td>#</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeList