import React, {useState} from 'react'

import {BiblePassagePicker} from 'bible-passage-picker'
import 'bible-passage-picker/dist/index.css'
import {PassageValueType} from "bible-passage-picker/dist/types";

const App = () => {
    const [selectedPassage, setSelectedPassage] = useState<PassageValueType>({
        mode: 'single',
        single: {book: 'Genesis', chapter: "1", verse: "1"},
        start: null,
        end: null
    });

    return <BiblePassagePicker value={selectedPassage} setValue={setSelectedPassage}/>
}

export default App