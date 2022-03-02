import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

const Form = styled.form`
`

const Field = styled.div`
`

const Label = styled.label`
  display: block;
`

const Input = styled.input``


const Search: React.FC = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([])

  console.log('I run with every render');
  console.log('results is ', results)

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search)
    }

    if (term) {
      search();
    }

  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div>
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
      </div>
    )
  })
  return (
    <Form>
      <Field>
        <Label>Enter Search Term</Label>
        <Input value={term} onChange={e => setTerm(e.target.value)}></Input>
      </Field>
      {renderedResults}
    </Form>
  )
}

export default Search;