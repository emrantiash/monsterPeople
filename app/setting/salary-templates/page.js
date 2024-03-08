"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.style";
import _templates from "../../assets/img/setting/Empty_salary_template.svg";
import Button from "@/app/components/button/Button";


const length = false;



export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setbreadcrumb(["Setting", "Salary Template"]));
  }, [dispatch]);

  const _submit = () => {
    router.push("/people/add", { scroll: false });
  };
  return (
    <div>
      {length ? (
        <div className="" style={styles.NoLengthContainer}>
          <Image src={_templates} alt="_template" />
          <div style={styles.innerBox}>
            <div className="text-md font-weight-bold">
              You haven’t created any salary templates yet.
            </div>
            <div className="text-md">
              Create Salary templates for commonly used salary structures and
              assign them to employees
            </div>
            <Button
              class="btn btn-success text-md"
              text="Create Salary Template"
            />
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <div style={styles.headerBox}>
            <div className="text-md font-weight-bold"></div>
            <div className="text-md">
              <Button class="btn btn-success text-md" text="Create New" />
            </div>
          </div>

          <div style={styles.tableRoot}>
           
          </div>
        </div>
      )}
    </div>
  );
}
