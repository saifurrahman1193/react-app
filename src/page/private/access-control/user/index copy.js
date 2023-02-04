import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  Input,
  Select,
  Modal,
  Table,
  Button,
  Dropdown,
  Menu,
  Breadcrumb,
  Typography,
} from "antd";

import Header from "../../../../Components/common/Header";
import BodyHeader from "../../../../Components/common/BodyHeader";
import { isMobileView } from "../../../../Scripts/AppHelper";
import { Link } from "react-router-dom";
import { MoreOutlined, EditOutlined, UndoOutlined } from "@ant-design/icons";
import UserAddEditModal from "./UserAddEditModal";
import { postData } from "../../../../Scripts/api-service";
import { GET_USER_LIST, GET_ALL_ROLES } from "../../../../Scripts/api";
import CancelConfirmation from "../../../../Components/confirmationModal/cancelConfirmation";

const { Option } = Select;
const { Text } = Typography;

export default function Users(props) {
  const { width } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [userList, setUserList] = useState();
  const [roleList, setRoleList] = useState();
  const [totalData, setTotalData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValues, setSearchValues] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelcetedUser] = useState();
  const [rangeData, setRangeData] = useState();

  const filtersOption = [
    {
      id: 1,
      name: "name",
      label: "Name",
      span: 6,
      component: <Input placeholder="Select Name" />,
    },
    {
      id: 1,
      name: "email",
      label: "Email",
      span: 6,
      component: <Input placeholder="Select Email" />,
    },
    {
      id: 1,
      name: "phone",
      label: "Phone",
      span: 6,
      component: <Input placeholder="Select Phone" />,
    },
    {
      id: 1,
      name: "role_id",
      label: "Role",
      span: 6,
      component: <Select
        showSearch
        placeholder="Select a Product"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.children?.toLowerCase()?.includes(input?.toLowerCase())
        }
      >
        {roleList?.length ? (<>
          {roleList.map((item) => (
            <Option value={item.id} key={item.id}>
              {item.name}
            </Option>
          ))}
        </>
        ) : (
          ""
        )}
      </Select>,
    },
  ];

  const searchFilter = (values) => {
    console.log("values", values);
    setSearchValues(values);
  };

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "id",
    },
    {
      title: "Role",
      dataIndex: "roles_comma_seperated",
      key: "id",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
      render: (status) => {
        return (
          <p>
            {status == 1 ? (
              <Text type="success"> Active </Text>
            ) : (
              <Text type="danger"> Inactive </Text>
            )}
          </p>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <div className="cursore-pointer">
          <Dropdown overlay={menu(record)}>
            <MoreOutlined style={{ fontSize: "20px" }} />
          </Dropdown>
        </div>
      ),
    },
  ];

  const menu = (data) => (
    <Menu
      items={[
        {
          label: (
            <div
              onClick={() => {
                setSelcetedUser(data);
                setIsModalOpen(true);
                setIsEditMode(true);
              }}
            >
              <EditOutlined /> Edit User
            </div>
          ),
          key: "0",
        },
        // {
        //   label: (
        //     <div onClick={() => setSelcetedUser(data)}>
        //       <UndoOutlined /> Change Status
        //     </div>
        //   ),
        //   key: "1",
        // },
      ]}
    />
  );

  const getAllUsers = async () => {
    let filter = {
      page: currentPage,
    };

    let res = await postData(GET_USER_LIST, { ...filter, ...searchValues });
    let res_role = await postData(GET_ALL_ROLES);
    if (res_role) {
      let roleData = res_role?.data?.rolelist;
      setRoleList(roleData);
    }

    if (res) {
      let masterData = res?.data;
      setUserList(masterData?.data);
      setTotalData(masterData?.paginator?.total_count);
      setRangeData(masterData?.paginator?.record_per_page);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllUsers();
  }, [currentPage, searchValues]);

  return (
    <Fragment>
      <Card
        className="p-fixed"
        style={{ width: `${isMobileView() ? "100%" : `${width}px`}` }}
      >
        <Header
          title="User List"
          subTitle="Parsley is a availity calidation. It helps you provide you users with feedback on their form submission 
                        before sending it to your server."
          routes={
            <Breadcrumb>
              <Breadcrumb.Item>Accress Control</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/access-control/users">User List</Link>
              </Breadcrumb.Item>
              {/* <Breadcrumb.Item>Role Create</Breadcrumb.Item> */}
            </Breadcrumb>
          }
          actions={[
            <Button
              key="3"
              size="large"
              type="primary"
              onClick={() => setIsModalOpen(true)}
            >
              {" "}
              Add New{" "}
            </Button>,
          ]}
        ></Header>
      </Card>

      <div className="containt-body px-3">
        <Card>
          <BodyHeader
            title="User List"
            filtersOption={filtersOption}
            showFilterContent={true}
            searchFilter={searchFilter}
          ></BodyHeader>

          <Table
            dataSource={userList}
            columns={columns}
            scroll={{
              x: "calc(700px + 50%)",
            }}
            loading={loading}
            pagination={{
              showSizeChanger: false,
              current: currentPage,
              total: totalData,
              pageSize: rangeData,
              onChange: (page) => paginate(page),
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
          />
        </Card>
      </div>

      <Modal
        title={isEditMode ? "Update User" : "Add New User"}
        open={isModalOpen}
        footer={false}
        onCancel={() => {
          setIsModalOpen(false);
          setIsEditMode(false);
        }}
      // onOk={() => {
      //   CancelConfirmation({ props: true });
      // }}
      >
        <UserAddEditModal
          isEditMode={isEditMode}
          roleList={roleList}
          selectedUser={selectedUser}
          setIsModalOpen={setIsModalOpen}
        ></UserAddEditModal>
      </Modal>
    </Fragment>
  );
}
