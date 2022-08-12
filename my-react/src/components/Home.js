import Button from "./Button";


export default function Home() {
      const btnButton = [
    {
      id: 1,
      text: 'ღილაკი 1',
    },
    {
      id: 2,
      text: 'ღილაკი 2',
    },
    {
      id: 3,
      text: 'ღილაკი 3',
    },
    {
      id: 4,
      text: 'ღილაკი 4',
    }

  ]
    return(
        <section>
            {
                btnButton.filter((object) => object.id > 1).map((item, index) =>{
                return(
                    <Button key={item.id} text={item.text} />
                )
                })
            }
          </section>
    )
}