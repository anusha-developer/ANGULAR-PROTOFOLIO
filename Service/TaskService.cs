using PROTOFOLIO.Models;
using PROTOFOLIO.Repositary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PROTOFOLIO.Service
{
    public class TaskService
    {
        private TaskRepositary taskRepositary;

        public TaskService()
        {
            taskRepositary = new TaskRepositaryimpl();
        }
        public Task CreateTask(Task task)
        {
            return taskRepositary.CreateTask(task);
        }
        public Task FindTaskById(int id)
        {
            return taskRepositary.GetTaskById(id);
        }
        public List<Task> GetAllTask()
        {
            return taskRepositary.GetAllTasks();
        }

        public string removeTask(int id)
        {
            return taskRepositary.DeleteTask(id);
        }


    }
}