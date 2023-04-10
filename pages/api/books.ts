import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export type Book = {
  uuid: string;
  label: string;
  type: Type;
  parent: string;
  color: string;
  createdAt: string;
  createdBy: CreatedByOrUpdatedByOrPublishedBy;
  updatedAt: string;
  updatedBy: CreatedByOrUpdatedByOrPublishedBy;
  publishedAt: string;
  publishedBy: CreatedByOrUpdatedByOrPublishedBy;
  deletedAt?: null;
  deletedBy?: null;
  coverFile?: null;
};

export interface Type {
  uuid: string;
  name: string;
}

export interface CreatedByOrUpdatedByOrPublishedBy {
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

export type Res = {
  content: Book[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  sort: Sort;
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category, title } = req.query;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-TenantID", "ierapetra");
  myHeaders.append("Authorization", process?.env["AUTHORIZATION"] ?? "");

  var raw = JSON.stringify({
    value: "",
    containerTypes: ["67ec2653-6dda-492a-8a1a-f3cb3dcc0cbf"],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const page = req.query.page || 1;
  const xx = await fetch(
    `https://storev2-api.repox.io/public/containers/search?page=${page}&sort=label,asc`,
    {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }
  );
  console.log(xx);
  const xxx = (await xx.json()) as Res;
  res.status(200).json(xxx);
}
