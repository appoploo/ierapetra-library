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
  properties: [
    {
      uuid: string;
      propertyUuid: string;
      value: string;
      attributes: any[];
    }
  ];
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
  const { category = "", title, page = 1, searchTerm } = req.query;

  let data = JSON.stringify({
    value: searchTerm,
    containerTypes: ["67ec2653-6dda-492a-8a1a-f3cb3dcc0cbf"],
    propertyValueFilters: [
      {
        propertyUuid: "9d6a626f-b57d-43ae-b00c-77cd7a962384",
        propertyValue: category,
        logicalOperator: "AND",
        operator: "CONTAINS",
      },
    ],
  });
  let offset = Number(page === "undefined" ? 0 : page);
  const url = `https://storev2-api.repox.io/public/containers/search?page=${offset}&sort=label,asc`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-TenantID": "ierapetra",
      Authorization:
        "SeeT7tGPvXOAK0pMdNdlEBvJbt3z3OGebB14Ur4IiWtDWuWDRNqOi+57A15LS8WaBpezStlJX7wtbCzRuTVjmd8DNLtyJMqZqBRHZm3EJCm04EQecyLpU/4Ew5hwkOUyzKCTD9PVZSE4Ay2Mq7fcUd56vPEP4KGj0+TLpnxazus=",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((repoxData) => {
      res.status(200).json(repoxData);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
