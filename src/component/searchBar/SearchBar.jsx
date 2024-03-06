import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchFile } from '../../service/appData';
import { UserContext } from '../../context/appContext';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.scss';

export const searchParamsDict = {
    'name': 'searchByName',
    'order': 'order',
    'page': 'page',
    'pageSize': 'pageSize'
}

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const { userState } = useContext(UserContext)

    useEffect(() => {
        if (searchParams.has(searchParamsDict.name)) {
            setValue(searchParams.get(searchParamsDict.name));
        }
    }, [searchParams]);

    useEffect(() => {
        const fetch = async () => {
            if (value !== '') {
                const response = await searchFile(userState.token, `${searchParamsDict.name}=${value}`);
                if (response.status = 'ok') {
                    setSuggestions(response.data.records);
                }
            }
        }
        fetch()
    }, [value, searchParams]);

    const changeUrl = (url) => {
        if (url) {
            searchParams.set('search', url);
        } else if (value !== '') {
            searchParams.set('search', value);
        } else {
            searchParams.delete('search');
        }
        setSearchParams(searchParams);
    };

    const onSearchButt = (e) => {
        e.preventDefault();
        changeUrl();
    };

    const onSuggestionClick = (name) => (e) => {
        e.preventDefault();
        setValue(name);
        changeUrl(name);
    };

    const handleBlur = () => {
        setHideSuggestions(true);
    };

    const handleFocus = () => {
        setHideSuggestions(false);
    };

    return (
        <div className='search_container'>
            <form className='search_container_form'>
                <button className='search_container_button' onClick={onSearchButt}><SearchIcon /></button>
                <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="text"
                    className={'search_container_textbox'}
                    placeholder="Search by name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div className={`search_container_suggestions ${hideSuggestions ? 'hidden' : ''}`}>
                {suggestions?.map((suggestion) => (
                    <div
                        key={suggestion.id}
                        className={'search_container_suggestion'}
                        onClick={onSuggestionClick(suggestion.name)}
                    >
                        {suggestion.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
