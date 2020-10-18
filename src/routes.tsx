import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails'

import SelectMapPosition from './pages/createOrphanages/SelectMapPosition';
import OrphanageData from './pages/createOrphanages/OrphanageData'
import Header from './components/header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (<NavigationContainer>
        <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#f2f3f5" } }}>
            <Screen name="OrphanagesMap" component={OrphanagesMap} />
            <Screen
                name="OrphanagesDetails"
                component={OrphanagesDetails}
                options={{
                    headerShown: true,
                    header: () => <Header title="Orfanato" showCancel={false} />
                }}
            />
            <Screen
                name="SelectMapPosition"
                component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header: () => <Header title="Selecione o mapa" />
                }}
            />
            <Screen
                name="OrphanageData"
                component={OrphanageData}
                options={{
                    headerShown: true,
                    header: () => <Header title="Informe os dados" />
                }} />
        </Navigator>
    </NavigationContainer>);
}