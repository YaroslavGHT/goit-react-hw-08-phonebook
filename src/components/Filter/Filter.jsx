import { useDispatch, useSelector } from 'react-redux';
import { filteredValue } from '../../redux/filterSlice/filterSlice.js'
import {selectFilter} from '../../redux/filterSlice/filter.selector.js'

import css from './Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChangeFilter = (e) => {
        const filterValue = e.target.value.trim();
        dispatch(filteredValue(filterValue))
    }
    
    return (
        <>
            <h3 className={css.title}>Find contacts by name</h3>
            <input 
                className={css.input}   
                type="text"
                name="findName"
                value={filter}  // Змінено filter на value
                onChange={handleChangeFilter}
            />  
        </>
    );
};

export { Filter };