import style from './Lista.module.scss';
import Item from './Item/index';
import { ITarefa } from '../../Types/tarefa'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecioanda: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;