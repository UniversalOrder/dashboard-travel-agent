import { checkHttpStatus } from '../../utils'
import {
  requestOrder,
  failureOrder,
  receiveOrder
} from './actions'

var dataXML = `
<?xml version="1.0" encoding="UTF-8"?>
<AirShoppingRQ EchoToken="86f0cdc9-ee2d-439c-bbfb-4fe34f2bfe1d" Version="IATA2016.2" xmlns="http://www.iata.org/IATA/EDIST">
	<Document>
		<ReferenceVersion>1.0</ReferenceVersion>
	</Document>
	<Party>
		<Sender>
			<TravelAgencySender>
				<Name>JR TECHNOLOGIES</Name>
				<IATA_Number>20200154</IATA_Number>
				<AgencyID>00010080</AgencyID>
			</TravelAgencySender>
		</Sender>
		<Recipient>
			<ORA_Recipient>
				<AirlineID>C9</AirlineID>
			</ORA_Recipient>
		</Recipient>
	</Party>
	<Travelers>
		<Traveler>
			<AnonymousTraveler>
				<PTC Quantity="1">ADT</PTC>
			</AnonymousTraveler>
			<AnonymousTraveler>
				<PTC Quantity="1">CHD</PTC>
			</AnonymousTraveler>
		</Traveler>
	</Travelers>
	<CoreQuery>
		<OriginDestinations>
			<OriginDestination>
				<Departure>
					<AirportCode>LHR</AirportCode>
					<Date>2017-11-29</Date>
				</Departure>
				<Arrival>
					<AirportCode>BCN</AirportCode>
				</Arrival>
				<MarketingCarrierAirline>
					<AirlineID>C9</AirlineID>
					<Name>Kronos</Name>
				</MarketingCarrierAirline>
			</OriginDestination>
		</OriginDestinations>
	</CoreQuery>
	<Preference>
		<AirlinePreferences>
			<Airline>
				<AirlineID>C9</AirlineID>
			</Airline>
		</AirlinePreferences>
	</Preference>
</AirShoppingRQ>
`

export const fetchOrder = () => {
  return dispatch => {
    dispatch(requestOrder(true))

    fetch(process.env.REACT_APP_PROXY_IATA_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        'authorization-key': REACT_APP_PROXY_KEY_API.
      },
      body: dataXML
    })
    .then(response => {
      dispatch(requestOrder(false))

      return response
    })
    .then(checkHttpStatus)
    .then(order => dispatch(receiveOrder(order)))
    .catch(() => dispatch(
      failureOrder(true)
    ))
  }
}
