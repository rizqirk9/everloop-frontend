export type PaginationType = {
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
};

export type CommentType = {
  comment: string;
  createdAt: string;
};

export type ForumType = {
  title: string;
  content: string;
  uuid: string;
  createdAt: string;
};

export type File = {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
};

export type CampaignType = {
  name: string;
  description: string;
  date: string;
  banner?: File;
  media: string[];
  budget: number;
  uuid: string;
  createdAt: string;
  location: string;
  type: string;
  volunteer: number;
};
