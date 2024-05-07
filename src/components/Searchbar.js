'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
export default function Searchbar() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSearch = async () => {
      if (query.length > 1) {
        try {
          const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
          const search = await response.json();
          setSearch(search);
        } catch (error) {
          console.error('Error fetching search :', error);
          setSearch([]);
        }
      } else {
        setSearch([]);
      }
    };

    fetchSearch();
  }, [query]);



  const handleSearch = () => {
    router.push(`/details/${query}`);
  }

  return (
    <div className="relative w-48">
    <Combobox onChange={handleSearch}>
      <Combobox.Input placeholder="Search…"
        value={query} onChange={(event) => setQuery(event.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <Combobox.Options className="absolute bg-white py-1 w-full">
        {search.map((search,index) => (
          <Combobox.Option key={index} value={search}>
            {({ active }) => (
              <span className={`block px-2 truncate w-full ${
                active ? 'bg-orange-100' : ''
              }`}>
                {search.title}
              </span>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  </div>
  );
}
