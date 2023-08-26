import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { mdiDotsHorizontalCircle } from "@mdi/js";
import Icon from "@mdi/react";

export function ModelCustom({order}) {
  const [orderDetails, setOrderDetails] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
if (order){
  setOrderDetails(order)
}
  }, [order]);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        <Icon path={mdiDotsHorizontalCircle} size={1} />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Order</DialogHeader>
        <DialogBody divider>
          <div className="grid grid-cols-2">
            <div>
              <h5 className="card-title text-cyan-600">Applicant's Name:</h5>
              <p className="card-text">{orderDetails.applicantName}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Mobile Number:</h5>
              <p className="card-text">{orderDetails.mobileNumber}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">E-mail:</h5>
              <p className="card-text">{orderDetails.email}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">location:</h5>
              <p className="card-text">{orderDetails.location}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Services:</h5>
              <p className="card-text">{orderDetails.services}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Services Providers:</h5>
              <p className="card-text">{orderDetails.serviceProvider}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Kind Of Service:</h5>
              <p className="card-text">{orderDetails.kindOfService}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Description of project:</h5>
              <p className="card-text">{orderDetails.projectdescription}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Total Area Building:</h5>
              <p className="card-text">{orderDetails.totalAreaBuilding} m^2</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Payment Status:</h5>
              <p className="card-text">{orderDetails.payment}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Price:</h5>
              <p className="card-text">{orderDetails.number}</p>
            </div>
            <div>
              <h5 className="card-title text-cyan-600">Order Status:</h5>
              <p className="card-text">{orderDetails.completed}</p>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
