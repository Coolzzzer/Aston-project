import { Select } from "antd";  //подгружаем библиотеку для работы с 

function History() {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value: string) => {
        console.log('search:', value);
      };

  return <>
    <Select
    showSearch
    placeholder="Введите название фильма"
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: 'batman',
        label: 'Batman',
      },
      {
        value: 'superman',
        label: 'Superman',
      },
      {
        value: 'hulk',
        label: 'Hulk',
      },
      {
        value: '12 друзей Оушена',
        label: '12 друзей Оушена',
      },
    ]}
  />
  </>;
}

export default History;