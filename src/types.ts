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
