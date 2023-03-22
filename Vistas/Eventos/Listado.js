import { View } from 'react-native'
import React, {useContext} from 'react'
import { contextoEventos } from '../../Contextos/Eventos';
import ListadoEventos from './ListadoEventos'
import EventosCalendario from './EventosCalendario';
const Listado = () => {

    const { listado } = useContext(contextoEventos)

    return (
        <View >
            {(listado) ?
                <ListadoEventos />
                :
                <EventosCalendario />
            }
        </View>
    )
}

export default Listado