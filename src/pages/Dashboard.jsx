
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Home,
  LayoutDashboard,
  LogOut,
  Bell,
  ClipboardList,
  CheckCircle,
  Clock,
  FolderKanban,
  Plus,
  Trash2,
  Calendar,
  X,
} from "lucide-react";

// ZOD VALIDATION SCHEMA
const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Task title must contain at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required"),

  assignedEmployee: z
    .string()
    .min(1, "Please select an employee"),

  priority: z
    .string()
    .refine(
      (value) => ["Low", "Medium", "High"].includes(value),
      "Please select a valid priority"
    ),

  dueDate: z
    .string()
    .min(1, "Due date is required")
    .refine((date) => {
      const parsedDate = new Date(`${date}T00:00:00`);

      return (
        /^\d{4}-\d{2}-\d{2}$/.test(date) &&
        !Number.isNaN(parsedDate.getTime()) &&
        parsedDate.toISOString().slice(0, 10) === date
      );
    }, "Please select a valid due date"),

  status: z
    .string()
    .refine(
      (value) =>
        ["Pending", "In Progress", "Completed"].includes(value),
      "Please select a valid task status"
    ),
});

function Dashboard() {
  const navigate = useNavigate();

  // TASK STATE
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      assignedEmployee: "",
      priority: "Medium",
      dueDate: "",
      status: "Pending",
    },
  });

  // LOGOUT
  const handleLogout = () => {
    navigate("/");
  };

  // FORM SUBMISSION
  const onSubmit = (data) => {
    console.log("New Task Submitted:", data);

    const newTask = {
      id: Date.now(),
      ...data,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    reset();
    setShowForm(false);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // UPDATE TASK STATUS
  const updateStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // DASHBOARD STATISTICS
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const stats = [
    {
      title: "Total Projects",
      value: 0,
      icon: FolderKanban,
    },
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: ClipboardList,
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: CheckCircle,
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      icon: Clock,
    },
  ];

  // COMMON STYLES
  const inputStyle =
    "w-full p-3 rounded-lg border border-[#9BA685] bg-white outline-none focus:ring-2 focus:ring-[#637545]";

  const errorStyle = "text-red-600 text-sm mt-1";

  return (
    <div className="min-h-screen bg-[#EBEBD8]">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm px-6 md:px-10 py-4">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-[#455230]"
          >
            PulseWorks <span className="text-[#637545]">AI</span>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-3 md:gap-6">

            <Link
              to="/"
              className="flex items-center gap-2 text-[#455230] hover:text-[#637545] font-medium transition"
            >
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <span className="flex items-center gap-2 text-[#637545] font-semibold">
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </span>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 bg-[#637545] text-white px-3 md:px-4 py-2 rounded-lg hover:bg-[#455230] transition"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>

          </div>

        </div>

      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto p-5 md:p-8">

        {/* WELCOME HEADER */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#455230]">
              Dashboard Overview
            </h2>

            <p className="text-gray-600 mt-2">
              Welcome back! Here's your workspace overview.
            </p>
          </div>

          <button
            type="button"
            className="p-3 bg-white rounded-lg text-[#637545] shadow-sm"
            aria-label="Notifications"
          >
            <Bell size={21} />
          </button>

        </div>

        {/* STATISTICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm"
              >

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-500 text-sm">
                      {stat.title}
                    </p>

                    <h3 className="text-3xl font-bold text-[#455230] mt-2">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="bg-[#EBEBD8] p-3 rounded-lg">
                    <Icon
                      size={24}
                      className="text-[#637545]"
                    />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* MY TASKS SECTION */}
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm">

          {/* SECTION HEADER */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">

            <div>
              <h3 className="text-xl font-bold text-[#455230]">
                My Tasks
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Create and manage your tasks.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="flex items-center justify-center gap-2 bg-[#637545] text-white px-4 py-3 rounded-lg hover:bg-[#455230] transition"
            >
              {showForm ? <X size={19} /> : <Plus size={19} />}

              {showForm ? "Close Form" : "Add New Task"}
            </button>

          </div>

          {/* CREATE NEW TASK FORM */}
          {showForm && (

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-[#EBEBD8] p-5 rounded-xl mb-6 space-y-4"
            >

              <h4 className="text-lg font-semibold text-[#455230]">
                Create New Task
              </h4>

              {/* TASK TITLE */}
              <div>

                <label className="block text-sm font-medium text-[#455230] mb-2">
                  Task Title *
                </label>

                <input
                  type="text"
                  placeholder="Enter task title"
                  {...register("title")}
                  className={inputStyle}
                />

                {errors.title && (
                  <p className={errorStyle}>
                    {errors.title.message}
                  </p>
                )}

              </div>

              {/* DESCRIPTION */}
              <div>

                <label className="block text-sm font-medium text-[#455230] mb-2">
                  Description *
                </label>

                <textarea
                  rows="3"
                  placeholder="Enter task description"
                  {...register("description")}
                  className={`${inputStyle} resize-none`}
                />

                {errors.description && (
                  <p className={errorStyle}>
                    {errors.description.message}
                  </p>
                )}

              </div>

              {/* ASSIGNED EMPLOYEE */}
              <div>

                <label className="block text-sm font-medium text-[#455230] mb-2">
                  Assigned Employee *
                </label>

                <select
                  {...register("assignedEmployee")}
                  className={inputStyle}
                >

                  <option value="">
                    Select an employee
                  </option>

                  <option value="John">John</option>
                  <option value="Sarah">Sarah</option>
                  <option value="Alex">Alex</option>
                  <option value="David">David</option>

                </select>

                {errors.assignedEmployee && (
                  <p className={errorStyle}>
                    {errors.assignedEmployee.message}
                  </p>
                )}

              </div>

              {/* PRIORITY AND DUE DATE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-[#455230] mb-2">
                    Priority *
                  </label>

                  <select
                    {...register("priority")}
                    className={inputStyle}
                  >

                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>

                  </select>

                  {errors.priority && (
                    <p className={errorStyle}>
                      {errors.priority.message}
                    </p>
                  )}

                </div>

                <div>

                  <label className="block text-sm font-medium text-[#455230] mb-2">
                    Due Date *
                  </label>

                  <input
                    type="date"
                    {...register("dueDate")}
                    className={inputStyle}
                  />

                  {errors.dueDate && (
                    <p className={errorStyle}>
                      {errors.dueDate.message}
                    </p>
                  )}

                </div>

              </div>

              {/* TASK STATUS */}
              <div>

                <label className="block text-sm font-medium text-[#455230] mb-2">
                  Task Status *
                </label>

                <select
                  {...register("status")}
                  className={inputStyle}
                >

                  <option value="Pending">Pending</option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                </select>

                {errors.status && (
                  <p className={errorStyle}>
                    {errors.status.message}
                  </p>
                )}

              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-end">

                <button
                  type="submit"
                  className="bg-[#637545] text-white px-6 py-3 rounded-lg hover:bg-[#455230] transition font-medium"
                >
                  Create Task
                </button>

              </div>

            </form>

          )}

          {/* TASK LIST */}
          <div className="space-y-4">

            {tasks.length === 0 ? (

              <div className="text-center py-12 border-2 border-dashed border-[#9BA685] rounded-xl">

                <ClipboardList
                  size={40}
                  className="mx-auto text-[#9BA685] mb-3"
                />

                <h4 className="font-semibold text-[#455230]">
                  No tasks available
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Click Add New Task to create your first task.
                </p>

              </div>

            ) : (

              tasks.map((task) => (

                <div
                  key={task.id}
                  className="border border-[#D5D8C5] rounded-xl p-4 flex flex-col gap-3"
                >

                  <div className="flex flex-col sm:flex-row justify-between gap-3">

                    <div>
                      <h4 className="font-semibold text-[#455230]">
                        {task.title}
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        {task.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700 self-start"
                      title="Delete task"
                      aria-label={`Delete ${task.title}`}
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">

                    <span>
                      Assigned to: {task.assignedEmployee}
                    </span>

                    <span>
                      Priority: {task.priority}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {task.dueDate}
                    </span>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">

                    <label className="text-sm text-[#455230] font-medium">
                      Status:
                    </label>

                    <select
                      value={task.status}
                      onChange={(e) =>
                        updateStatus(task.id, e.target.value)
                      }
                      className="border border-[#9BA685] rounded-lg p-2 text-sm bg-white"
                    >

                      <option value="Pending">Pending</option>

                      <option value="In Progress">
                        In Progress
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                    </select>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm mt-6">

          <h3 className="text-xl font-bold text-[#455230] mb-4">
            Recent Activity
          </h3>

          {tasks.length === 0 ? (

            <p className="text-gray-500 text-sm">
              No recent activity to display.
            </p>

          ) : (

            <p className="text-gray-600 text-sm">
              You currently have {totalTasks} tasks,
              {completedTasks} completed,
              {pendingTasks} pending and
              {inProgressTasks} in progress.
            </p>

          )}

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
