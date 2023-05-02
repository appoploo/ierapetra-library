import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export interface Book {
  uuid: string;
  label: string;
  type: Type;
  parent: string;
  color: string;
  createdAt: Date;
  createdBy: EdBy;
  updatedAt: Date;
  updatedBy: EdBy;
  publishedAt: Date;
  publishedBy: EdBy;
  deletedAt: null;
  deletedBy: null;
  coverFile: null;
  properties: Property[];
  childContainers: any[];
  ancestorPath: AncestorPath[];
  datastreams: any[];
  tags: any[];
  watchDetails: WatchDetails;
}

export interface AncestorPath {
  uuid: string;
  label: string;
  color: string;
  publishedAt: Date;
}

export interface EdBy {
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

export interface Property {
  uuid: string;
  propertyUuid: string;
  value: string[] | string;
  attributes: any[];
}

export interface Type {
  uuid: string;
  name: string;
  slug: string;
}

export interface WatchDetails {
  watched: boolean;
  watchCount: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id = "" } = req.query;

  const url = `https://storev2-api.repox.io/public/containers/${id}`;

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-TenantID": "ierapetra",
      Authorization:
        "SeeT7tGPvXOAK0pMdNdlEBvJbt3z3OGebB14Ur4IiWtDWuWDRNqOi+57A15LS8WaBpezStlJX7wtbCzRuTVjmd8DNLtyJMqZqBRHZm3EJCm04EQecyLpU/4Ew5hwkOUyzKCTD9PVZSE4Ay2Mq7fcUd56vPEP4KGj0+TLpnxazus=",
    },
  })
    .then((response) => response.json())
    .then((repoxData) => {
      res.status(200).json(repoxData);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
