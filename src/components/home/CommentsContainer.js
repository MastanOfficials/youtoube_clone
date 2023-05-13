import React from "react";
import user from "../assets/images/user.png";

const commentsdata = [
  {
    name: "mastan crations",
    comment: "Lorem ipsum dolor  djlfjsdljfsljkf",
    replay: [
      {
        name: "mastan crations",
        comment: "hi how are you",
        replay: [
            {
                name: "mastan crations",
                comment: "Lorem ipsum dolor  djlfjsdljfsljkf",
                replay: [
                  {
                    name: "mastan crations",
                    comment: "hi how are you",
                    replay: [
                      {
                        name: "mastan crations",
                        comment: "hi how are you",
                        replay: [
                          {
                            name: "mastan crations",
                            comment: "hi how are you",
                            replay: [
                              {
                                name: "mastan crations",
                                comment: "hi how are you",
                                replay: [
                                  {
                                    name: "mastan crations",
                                    comment: "hi how are you",
                                    replay: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
          {
            name: "mastan crations",
            comment: "hi how are you",
            replay: [
              {
                name: "mastan crations",
                comment: "hi how are you",
                replay: [
                  {
                    name: "mastan crations",
                    comment: "hi how are you",
                    replay: [
                      {
                        name: "mastan crations",
                        comment: "hi how are you",
                        replay: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "mastan crations",
    comment: "Lorem ipsum dolor  djlfjsdljfsljkf",
    replay: [
      {
        name: "mastan crations",
        comment: "hi how are you",
        replay: [
          {
            name: "mastan crations",
            comment: "hi how are you",
            replay: [
              {
                name: "mastan crations",
                comment: "hi how are you",
                replay: [
                  {
                    name: "mastan crations",
                    comment: "hi how are you",
                    replay: [
                      {
                        name: "mastan crations",
                        comment: "hi how are you",
                        replay: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, comment, replay } = data;
  return (
    <>
      <div className="d-flex">
        <img
          src={user}
          alt="user"
          width="50px"
          height="50px"
          className="p-2 m-2"
        />
        <div>
          <p className="bg-gray">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((commnet, index) => (
    <div>
      <Comment key={index} data={commnet} />
     <div className="m-4">
     <CommentList comments={commnet.replay}/>
     </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h4>Comments</h4>
      <CommentList comments={commentsdata} />
    </div>
  );
};

export default CommentsContainer;
