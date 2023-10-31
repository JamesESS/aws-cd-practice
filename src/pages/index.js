import * as React from "react";
import NumberInputComponent from "../components/NumberInput";


const IndexPage = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(
      "https://2pmvww4fc6.execute-api.eu-west-2.amazonaws.com/default/dbblueprint?TableName=gatsby-devops"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <main>
      <NumberInputComponent></NumberInputComponent>
      {data ? data.Items.map(data => {console.log(data.Items)
      return (
        <>
        <p >sort key: {JSON.stringify(data)}</p>
        <p >attribute1: {JSON.stringify(data.attribute1)}</p>
        <p >id: {JSON.stringify(data.id)}</p>
        <p >attribute2: {JSON.stringify(data.attribute2)}</p>
        </>
      )}) : (
        <p >Loading...</p>
      )}
      
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
