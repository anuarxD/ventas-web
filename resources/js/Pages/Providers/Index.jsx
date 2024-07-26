import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
//import Form from './Form';
import TextInput from '@/Components/TextInput';


export default function Index({ auth }) {

   const { providers } = usePage().props;
   const [searchProvider, setSearchProvider] = useState('');
   console.log(providers);

    const filteredProvider = providers.filter(
        provider => provider.name.toLowerCase().includes(searchProviders.toLowerCase())
    )
    return (
        <AuthenticatedLayout user={auth.user} header='PROVEEDORES'>

          
        </AuthenticatedLayout>
    )
}