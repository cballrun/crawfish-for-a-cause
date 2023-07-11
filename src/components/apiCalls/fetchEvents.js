export default function FetchEvents({
    setEvents

}) {
    return fetch('http://localhost:4000/graphql', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query:
            `query {
                events{
                    name
                    city
                    state
                    location
                    description
                }}`,
    }),
}, [])
.then((response) => {
    if (response.ok) {
      const data = response.json()
      return data
    } else {
      console.log("Error occured during fetch request.")
      throw response
    }
  })
  .then((data) => {
    var data1 = data["data"] 
    console.log("events Data", data1)
    var institutionsData = data1["events"]
    setEvents(EventsData)
    setLoading(false)
    return EventsData
  })
}
