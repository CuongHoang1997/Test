import React, { useEffect, useState } from "react";
import myJson from "./data.json";
import Table from "./Table";

const Data = () => {
  const data = myJson.data.advisorProfileCollection.items;
  const [view, setView] = useState(true);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState();
  const [dataSource, setDataSource] = useState(data);
  const [tableFilter, setTableFilter] = useState([]);

  const handleFilter = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((item) =>
        Object.keys(item).some((index) =>
          String(item[index])
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  const fetchCategory = () => {
    return data.map((item) =>
      item.categoriesCollection.items.map((itemCategory) => itemCategory)
    );
  };
  useEffect(() => {
    setCategory(fetchCategory());
    // const element = [].concat(...fetchCategory());
    // setCategory(element);
  }, [data]);

  console.log(category);
  console.log(dataSource);

  return (
    <div>
      <div className="flex justify-around items-center my-10">
        <button
          className="w-[200px] py-3 border bg-green-500 text-white text-2xl font-bold  "
          onClick={() => setView(!view)}
        >
          {view ? "Horizontial" : "Vertical"}
        </button>
        <input
          type="text"
          name="search"
          className=" px-5 border-2 border-gray-500 outline-none rounded-lg h-16"
          placeholder="Type here to search..."
          onChange={handleFilter}
        />
      </div>
      {!view ? (
        <Table className="w-full">
          <thead>
            <tr>
              <th>Display name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Avatar</th>
              <th>Categories collection</th>
              <th>Services Collection</th>
              <th>Skills collection</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((item, index) => (
                  <tr key={index}>
                    <td>{item.displayName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>

                    <td>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                    <td>
                      {item.categoriesCollection?.items &&
                        item.categoriesCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                    <td>
                      {item.skillsCollection?.items &&
                        item.skillsCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>{item.status}</td>
                  </tr>
                ))
              : dataSource.map((item, index) => (
                  <tr key={index}>
                    <td>{item.displayName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>

                    <td>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                    <td>
                      {item.categoriesCollection?.items &&
                        item.categoriesCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>
                      {item.servicesCollection?.items &&
                        item.servicesCollection?.items.map((item, index) => (
                          <p key={index}>{item.name}</p>
                        ))}
                    </td>
                    <td>
                      {item.skillsCollection?.items &&
                        item.skillsCollection?.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                    <td>{item?.status}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      ) : (
        <Table>
          <tbody>
            <tr>
              <th>Display name</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.displayName}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.displayName}</td>
                  ))}
            </tr>
            <tr>
              <th>Email</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.email}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.email}</td>
                  ))}
            </tr>
            <tr>
              <th>Phone</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.phone}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.phone}</td>
                  ))}
            </tr>
            <tr>
              <th>Avatar</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.avatarUrl && (
                        <img
                          className="w-20 h-20"
                          src={item.avatarUrl?.url}
                          alt=""
                        />
                      )}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Categories collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.categoriesCollection.items &&
                        item.categoriesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.categoriesCollection.items &&
                        item.categoriesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Services Collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.servicesCollection.items &&
                        item.servicesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.servicesCollection.items &&
                        item.servicesCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Skills collection</th>
              {value.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>
                      {item.skillsCollection.items &&
                        item.skillsCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>
                      {item.skillsCollection.items &&
                        item.skillsCollection.items.map((item, index) => (
                          <p key={index}>{item.displayName}</p>
                        ))}
                    </td>
                  ))}
            </tr>
            <tr>
              <th>Status</th>
              {value?.length > 0
                ? tableFilter.map((item, index) => (
                    <td key={index}>{item.status}</td>
                  ))
                : dataSource.map((item, index) => (
                    <td key={index}>{item.status}</td>
                  ))}
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Data;
