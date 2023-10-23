import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckIn } from "./useCheckIn";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const moveBack = useMoveBack();
  const { checkIn, isCheckingIn } = useCheckIn();
  const { data, isLoading } = useBooking();

  console.log(data);

  useEffect(() => setConfirmPaid(data?.isPaid ?? false), [data]);

  if (isLoading) <Spinner />;

  // const {
  //   id: bookingId,
  //   guests,
  //   totalPrice,
  //   numGuests,
  //   hasBreakfast,
  //   numNights,
  // } = data;

  function handleCheckin() {
    if (!confirmPaid) return;
    checkIn(data.id);
  }

  // return null;
  if (data)
    return (
      <>
        <Row type="horizontal">
          <Heading as="h1">Check in booking #{data.bookingId}</Heading>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>

        <BookingDataBox booking={data} />

        <Box>
          <CheckBox
            checked={confirmPaid}
            onChange={() => setConfirmPaid((confirm) => !confirm)}
            disabled={confirmPaid}
            id="confirm"
          >
            I confirm that {data.guests.fullName} has made a full payment of{" "}
            {formatCurrency(data.totalPrice)}
          </CheckBox>
        </Box>

        <ButtonGroup>
          <Button
            onClick={handleCheckin}
            disabled={!confirmPaid || isCheckingIn}
          >
            Check in booking #{data.bookingId}
          </Button>
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </>
    );
}

export default CheckinBooking;
